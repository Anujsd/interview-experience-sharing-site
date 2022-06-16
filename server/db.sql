-- \l To see databases
-- \d To see tables
-- \c To change database

-- current database is postgres change it to interviewExperiences in final

-- Create database
CREATE DATABASE interviewExperiences;

-- Go to database
/c interviewExperiences;

--  Experiences table experiences;
DROP TABLE experiences;

CREATE TABLE experiences (
    id SERIAL PRIMARY KEY NOT NULL,
    companyName varchar(64) NOT NULL,
    jobRole varchar(255) NOT NULL,
    jobExperienceLevel int NOT NULL,
    jobLocation varchar(255) NOT NULL,
    jobSalary varchar(64),
    experience text NOT NULL,
    username varchar(64) NOT NULL,
    userLinkedInId varchar(255),
    approved boolean DEFAULT FALSE
);

INSERT INTO experiences(companyName,jobRole,jobExperienceLevel,jobLocation,jobSalary,experience,username,userLinkedInId)
VALUES('amazon','SDE-1',0,'pune','40,00,000','Lorem ipsum dolor sit amet','anonomys','a');

INSERT INTO experiences(companyName,jobRole,jobExperienceLevel,jobLocation,jobSalary,experience,username,userLinkedInId,approved)
VALUES('amazon','SDE-1',0,'pune','40,00,000','Lorem ipsum dolor sit amet','anonomys','a',TRUE);


-- Users table
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(512) NOT NULL
);

INSERT INTO users(email,password)VALUES('anujdube@app.com','password');