CREATE DATABASE thegoldenacademy;

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    video_title VARCHAR(255) NOT NULL,
    video_path VARCHAR(255) NOT NULL
);