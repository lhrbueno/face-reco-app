INSERT INTO users (name, email, entries, joined) VALUES ('admin', 'admin@test.com', 999, CURRENT_DATE);

INSERT INTO login (hash, email) VALUES ('$2a$17$mA4a2FH6ooMPIl58b4BMl.YCDjPnymJiZlPngSl282VMmdwfU8SGS', 'admin@test.com');