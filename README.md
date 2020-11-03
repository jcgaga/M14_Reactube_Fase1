# M14_Reactube_Fase1

# Introducció

Amb aquest exercici posarem en pràctica els conceptes apresos de React.
L'objectiu és que a mesura que avances en la realització d'aquest, siguis més autònom i necessitis
menys consells i ajudes. Sent capaç de desenvolupar funcionalitats la teva només una vegada que ho
hagis finalitzat.

# Manera de realització

És molt important que la realització del projecte es faci per commits separats.
Al començament de cada apartat apareix el nom que s'ha de posar al commit de la funcionalitat que es
realitzarà. A continuació apareix la descripció de la funcionalitat que s'ha de desenvolupar, i finalment,
apareixen els consells i enllaços a recursos que poden ser d'utilitat per a la seva realització.

# Descripció del projecte
Farem la nostra pròpia versió de youtube, consumint vídeos reals mitjançant la API que proporciona
google:
https://developers.google.com/youtube/v3/docs?hl=es

Abans de començar convé llegir per damunt la documentació de la API de YouTube per a veure que
ofereix.
En aquesta aplicació es podran buscar vídeos, hi haurà gestió de favorits, historial de cerques i detall
de vídeo amb els seus vídeos relacionats:

# Commit 1. Crear la base del projecte

    Instalación:
        1. npx create-react-app reactube
        2. npm install react-bootstrap bootstrap
        3. Index.js o App.js --> "import 'bootstrap/dist/css/bootstrap.min.css';"
        4. npm install axios

# Commit 2. Component App
        1. Crear carpeta ./src/components
        2. Crear SearchBar.js, VideoDetails.js, VideoList.js y VideoItem.js
        3. Crear Layout amb react-bootstrap en App.js
        4. Crear carpeta api.
        5. Crear api/youtube.js amb la trucada a l'Api de Youtube.
        6. Crear métodes a App.js(handleSubmit y handleVideoselect).
        7. Crear state a App.js (videos[] y selectedVideo).
        7. Asignar a cada component les props corresponents.
        8. Mostrar por consola el array videos de la petició a l'Api de Youtube.

# Commit 3. Component SearchBar
        1. Crear el component SearchBar.
        2. Crear state search on guardar el valor de la recerca.
        3. Crear métode handleChange() per actualitzar state search.
        4. Crear métode handleSubmit() per enviar per props el component App el valor de recerca.
        5. Implementar el return() del render() amb el component <Form />
        6. El component App ja rep per props el valor de la recerca y mostra por consola el resultat del valor introduit al input Search...

# Commit 4. Compoment VideoList
        1. Crear el component VideoList com stateless, no fa falta que sigui una classe.
        2. Fer un map del props videos que rep, per treure l'informació de cada video guardat.
        3. Pasar per props al component VideoItem el valor de la key, l'informacio de cada video i l'event de video seleccionat.
        4. (Prova) Mostrar per pantalla llistat de videos amb la següent informació: Title, VideoId i URL.
        5. La videoList a la primera visualització és carrega del ./json/data.json 

# Commit 5. Component VideoItem
        1. Crear el component VideoItem com stateless.
        2. Rep props video d'on es treu la url de l'imatge i el títol del video.
        3. Rep props handleVideoSelect que retorna el video seleccionat al Component App.
        4. Faig servir display-flex per visualitzar correctament la VideoList.

# Commit 6. Component VideoDetail
        1. Rep dos props video i videoDefault, videoDefault per carregar el primer video de la llista.
        2. La props video pasa el video escollit de la VideoList. 
        3. Es mostra títol i descripció del video.
        4. Si no hi video escollit de la llista, es carrega el primer video de la llista del ./json/data.json.
        5. Si fem recerca també es carrega el primer video de la VideoList.