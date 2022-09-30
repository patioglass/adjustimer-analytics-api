CREATE TABLE videoHistory (
    video_history_id int AUTO_INCREMENT NOT NULL,
    video_service_type int NOT NULL,
    video_url varchar(2048) NOT NULL,
    video_title varchar(256) NOT NULL,
    user_id varchar(256) NOT NULL,
    create_date datetime DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (video_history_id)
);