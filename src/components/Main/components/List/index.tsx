import "./index.css";
import ListItem from "./components/ListItem";
import {getJobs, JobWithCompany} from "../../../../services/jobs";
import React, {useEffect, useState} from "react";
import Button from "../../../Button";
import {useNavigate, useParams} from "react-router-dom";
import {Box, List as ListMUI, Theme, useMediaQuery} from "@mui/material";

const List = (): React.ReactElement => {
    const [jobs, setJobs] = useState<JobWithCompany[]>([]);
    const [countPage, setCountPage] = useState<number>(1);
    const {page = 1} = useParams<{ page: string | undefined }>();
    const currentPage: number = Number(page);
    const navigate = useNavigate();
    const mobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down(700));
    useEffect(() => {
        getJobs(5, currentPage).then((jobsData) => {
            setJobs(jobsData.jobs);
            setCountPage(Math.ceil(jobsData.countJobs / 5));
        });
    }, [currentPage]);
    const setCurrentPage = (nextPage: number) => {
        navigate(`/${nextPage}`);
    };

    if (jobs.length === 0) {
        return <>loading</>;
    }
    return (
        <Box display="flex" flexDirection="column" alignItems={mobile ? "center" : undefined}>
            <ListMUI>
                {jobs.map((job) => (
                    <ListItem key={job.id} {...job} />
                ))}
            </ListMUI>
            <Box display="flex" alignItems="center" justifyContent="end">
                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Prev page
                </Button>
                <Box padding="10px">{currentPage}</Box>
                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    disabled={currentPage === countPage}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next page
                </Button>
            </Box>
        </Box>
    );
};
export default List;
