CREATE ROLE codehub
WITH
    LOGIN NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION PASSWORD 'Codehub';

CREATE TABLE users (
    id SERIAL,
    name VARCHAR(255),
    handles VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO
    users (name, handles)
VALUES ('Alex', 'Project Track'),
    ('Sloka', 'Python'),
    ('Venn', 'Learn Track'),
    ('Sammy', 'Learn Track'),
    ('Chase', 'Web Dev'),
    ('Stephen', 'Project Track');

GRANT pg_read_all_stats TO codehub;

GRANT INSERT,
SELECT, DELETE,
UPDATE, REFERENCES, TRIGGER ON ALL TABLES IN SCHEMA public TO codehub;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO codehub;