import React from "react";
import { NavLink } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import Nimap from "../../Images/Nimap.png";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
  },
  {
    path: "/master",
    name: "Master",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        color="blue"
        background-color="blue"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
    subRoutes: [
      {
        path: "/host",
        name: "Host",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            color="blue"
            background-color="blue"
            class="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
        ),
      },
      {
        path: "/master/user",
        name: "User",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            color="blue"
            background-color="blue"
            class="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
        ),
      },
    ],
  },
  {
    path: "/allgames",
    name: "All Games",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        color="blue"
        background-color="blue"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
  },
  {
    path: "/puzzle",
    name: "Puzzle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        color="blue"
        background-color="blue"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
    exact: true,
    subRoutes: [
      {
        path: "/puzzle/addpuzzle",
        name: "Add Puzzle ",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            color="blue"
            background-color="blue"
            class="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
        ),
      },
      {
        path: "/puzzle/puzzlebank",
        name: "Puzzle Bank",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            color="blue"
            background-color="blue"
            class="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
        ),
      },
      {
        path: "/puzzle/puzzlecompleted",
        name: "Puzzle Completed",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            color="blue"
            background-color="blue"
            class="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
        ),
      },
    ],
  },
  {
    path: "/quiz",
    name: "Quiz",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        color="blue"
        background-color="blue"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
    subRoutes: [
      {
        path: "/quiz/addquiz",
        name: "Add Quiz ",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            color="blue"
            background-color="blue"
            class="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
        ),
      },
      {
        path: "/quiz/quizbank",
        name: "Quiz Bank",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            color="blue"
            background-color="blue"
            class="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
        ),
      },
      {
        path: "/quiz/quizcompleted",
        name: "Quiz Completed",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            color="blue"
            background-color="blue"
            class="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
        ),
      },
      {
        path: "/quiz/archieve",
        name: "Archieve",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            color="blue"
            background-color="blue"
            class="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
        ),
      },
    ],
  },
  {
    path: "/subscription",
    name: "Subscription",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        color="blue"
        background-color="blue"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
  },
  {
    path: "/rewards",
    name: "Rewards",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        color="blue"
        background-color="blue"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
  },
  {
    path: "/fundingprojects",
    name: "Funding Projects",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        color="blue"
        background-color="blue"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
  },
  {
    path: "/donation",
    name: "Donation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        color="blue"
        background-color="blue"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
  },

  {
    path: "/setting",
    name: "Setting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        color="blue"
        background-color="blue"
        class="bi bi-app"
        viewBox="0 0 16 16"
      >
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
      </svg>
    ),
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [drawerWidth, setDrawerWidth] = React.useState(250);

  const useStyles = makeStyles((theme) => ({
    reverse: {
      transform: "rotate(0deg)",
      minWidth: "10px",
      "&:hover": {
        color: "purple",
      },
    },
  }));

  const classes = useStyles();

  const toggle = () => setIsOpen(!isOpen);

  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "65px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img className="nimaplogo-img" src={Nimap} />
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <MdDoubleArrow className="right-double-arrow" onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
