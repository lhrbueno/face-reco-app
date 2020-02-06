INSERT INTO users (name, email, entries, joined) VALUES ('admin', 'admin@test.com', 999, CURRENT_DATE);

INSERT INTO login (hash, email) VALUES ('$2a$13$1gG5S/pwcIRKwwPa0RSCv.dbd7L8geaGscE.mVvmOBdfIyPSx11Q.', 'admin@test.com');