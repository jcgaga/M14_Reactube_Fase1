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
        3. Crear Layout con react-bootstrap en App.js
        4. Crear carpeta api.
        5. Crear api/youtube.js con la llamada a la Api de Youtube.
        6. Crear métodos en App.js(handleSubmit y handleVideoselect).
        7. Crear state en App.js (videos[] y selectedVideo).
        7. Asignar a cada componente las props correspondientes.
        8. Mostrar por consola el array videos de la petición al Api de Youtube.

# Commit 3. Component SearchBar
        1. Crear el component SearchBar.
        2. Crear state search donde guardar el valor de la búsqueda,
        3. Crear método handleChange() para actualizar state search.
        4. Crear método handleSubmit() para enviar por props al componente App el valor de busqueda.
        5. Implementar el return() del render() con el componente <Form />
        6. El componente App ya recibe por props el valor de la búsqueda y muestra por consola el resultado del valor introducido en el input Search...