-- Create database
CREATE DATABASE interviewExperiences;

--  Experiences table
CREATE TABLE experiences (
    id SERIAL PRIMARY KEY NOT NULL,
    companyName varchar(64) NOT NULL,
    jobRole varchar(255) NOT NULL,
    jobExperienceLevel int NOT NULL,
    jobLocation varchar(255) NOT NULL,
    jobSalary varchar(64),
    experience text NOT NULL,
    username varchar(64) NOT NULL,
    userLinkedInId varchar(255)
);

INSERT INTO experiences(companyName,jobRole,jobExperienceLevel,jobLocation,jobSalary,experience,username,userLinkedInId)
VALUES('amazon','SDE-1',0,'pune','40,00,000','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error exercitationem vero quod ipsa, corrupti tempora ipsum ducimus suscipit, illo explicabo dignissimos quam? Ea eos quod culpa accusantium possimus voluptate molestiae reiciendis corporis id, doloribus est dolorum maiores repellendus velit facilis reprehenderit doloremque itaque hic. Dicta porro dolorum, excepturi, ullam quia expedita vero unde, vitae velit pariatur itaque. Suscipit totam odio magni dolorem optio, consectetur eos exercitationem nemo architecto laborum perspiciatis at id perferendis atque eaque hic accusamus fugit autem modi rem. Debitis totam tenetur in impedit cupiditate ex! Hic dignissimos neque reiciendis sint ad aperiam ipsa est ut! Enim, similique.','anonomys','a');


-- Users table
CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(512) NOT NULL
);

INSERT INTO users(email,password)VALUES('anujdube@app.com','password');