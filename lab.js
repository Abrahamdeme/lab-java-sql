
// Instructions
// 1 Normalize the following blog database and write the DDL scripts to create the database tables:

CREATE TABLE Authors (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    author_name VARCHAR(255) NOT NULL
);


CREATE TABLE Posts (
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    author_id INT,
    title VARCHAR(255) NOT NULL,
    word_count INT,
    views INT,
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);


