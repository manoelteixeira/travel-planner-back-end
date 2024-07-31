-- db/seed.sql
\c trip_planner;

INSERT INTO places (name, city, address, description, image) VALUES
('Colosseum', 
'Rome', 
'Piazza del Colosseo, 1', 
'The site of many bloody gladiatorial fights', 
'https://travel.usnews.com/dims4/USNEWS/2330e6e/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FGettyImages-158762142.jpg'
),
('Vatican Museums and Sistine Chapel', 
'Rome', 
'Viale Vaticano, 97', 
'While Vatican City is home to both the Roman Catholic Church`s governing body and its leader, the pope, this small nation within Rome offers a wealth of attractions open to visitors of any faith.', 
'https://travel.usnews.com/dims4/USNEWS/93b10f7/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FKonstikGetty_Images_cIAbnyU.jpg'
),
('St. Peter`s Basilica',
 'Rome',
 'Piazza San Pietro',
 'The epicenter of Roman Catholicism, St. Peter`s Basilica is centered in Vatican City and is renowned for its stunning architecture.',
 'https://travel.usnews.com/dims4/USNEWS/8afe40b/2147483647/resize/976x652%5E%3E/crop/976x652/quality/85/?url=https%3A%2F%2Ftravel.usnews.com%2Fimages%2FSt_Peters_Basilica_Joe_Price_Getty.jpg'
 ),
 ('Statue of Liberty',
 'New York',
 'Ellis Island',
 'America`s most iconic sight, the Statue of Liberty is at the top of every first-time visitor`s list of things to do in New York.',
 'https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg'
 ),
 ('Central Park',
 'New York',
 'Central Park stretches from North 110th Street to Central Park South (59th Street), and from Central Park West (8th Avenue) to 5th Ave',
 'An oasis of green amongst New York`s concrete canyons, Central Park is a sanctuary of peace and quiet for visitors and locals alike.',
 'https://www.planetware.com/photos-large/USNY/new-york-city-central-park-lake-bridge-boats.jpg'
 ),
 ('Brooklyn Bridge',
'New York',
'New York City, NY 10038',
'One of the primary symbols of New York City, it is a marvel of design and provides spectacular views of the city`s skyline.',
'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/90/3d/6f/photo0jpg.jpg'
 );


INSERT INTO trips (name, city, description, image) VALUES
('Mamma Mia', 'Rome', 'Visiting Rome', 'https://www.thoughtco.com/thmb/QaZwUWsh9UE_l-4vueCn93sS304=/2097x1430/filters:fill(auto,1)/the-roman-coliseum-in-the-early-morning-655490208-5abd1d0f119fa80037ef98b9.jpg'),
('NY Babe', 'New York', 'Visiting New York', 'https://media.architecturaldigest.com/photos/5b7dc0c5f3a08c0bc142f98f/master/pass/GettyImages-617579982.jpg');

INSERT INTO trip_places (is_favorite, visited, trip_id, place_id) VALUES
(TRUE, TRUE, 1, 1),
(FALSE, FALSE, 1, 2),
(FALSE, FALSE, 1, 3),
(FALSE, FALSE, 2, 4),
(FALSE, FALSE, 2, 5),
(TRUE, TRUE, 2, 6);