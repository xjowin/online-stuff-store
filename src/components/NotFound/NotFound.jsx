import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
<section className={styles.NotFound}>
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Not Found</h1>
      <p style={styles.paragraph}>
        Sorry, the requested page was not found. Please return to <br />
        <Link to="/" style={styles.link}>
          Home page
        </Link>
      </p>
    </div>
</section>
  );
};

const styles = {
    // NotFound: { 
    //     maxWidth: "900px",
    //     margin: "0 auto",
    //     padding: "20px",

    //     marginBottom: "90px",
  
    // },

    container: {
    textAlign: "center",
    marginTop: "165px",
    marginBottom: "150px",
    color: "white",
    width: "950px",

  },
  heading: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "white",
  },
  paragraph: {
    fontSize: "1rem",
    marginTop: "20px",
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "underline",
  },
};

export default NotFound;