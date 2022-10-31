import "./index.css";
import { JobWithCompany } from "../../../../../../services/jobs";
import { Link, Theme, useMediaQuery } from "@mui/material";
import React from "react";
import ListItemMUI from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const ListItem = ({
  id,
  title,
  location,
  workingHours,
  tags,
  companyData,
}: JobWithCompany) => {
    const mobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down(700));
  return (
    <ListItemMUI
      sx={{ paddingLeft: "0" }}
      secondaryAction={
        mobile ? undefined : (
          <Link
            underline="none"
            color="inherit"
            href={`/company/${companyData.id}`}
          >
            {companyData.title}
          </Link>
        )
      }
    >
      <ListItemAvatar>
        <Avatar
          variant="square"
          sx={{
            backgroundColor: "aqua",
            borderRadius: "5px",
            padding: "5px",
            marginRight: "10px",
            minWidth: "40px",
          }}
        >
          <img
            height={"40px"}
            width={"40px"}
            src="/companiesLogo/SafetyWing.png"
            alt="company logo"
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link underline="none" color="inherit" href={`/job/${id}`}>
            {title} at {companyData.title}
          </Link>
        }
        secondary={
            <>
              <Link
                  marginX={1}
                underline="none"
                color="inherit"
                href="#"
              >
                {location}
              </Link>
              <Link
                underline="none"
                color="inherit"
                marginX={1}
                href="#"
              >
                {workingHours}
              </Link>
              {mobile ? undefined : tags.map((tag) => (
                <Link
                  key={tag}
                  marginX={1}
                  underline="none"
                  color="inherit"
                  href="#"
                >
                  {tag}
                </Link>
              ))}
            </>
        }
      />
    </ListItemMUI>
  );
};
export default ListItem;
