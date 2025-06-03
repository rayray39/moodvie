import type { Movie } from "../types/Movie";

export function ExportMovies(movies:Movie[], exportName:string) {
    // writes the movie to a .txt file and downloads it

    // headers of .txt file
    let content = "Favourite Movies\n";
    content += "movie_id | movie_title | movie_releaseDate | movie_overview\n";

    // append each movie's details to the content
    movies.forEach((movie) => {
        content += `${movie.id} | ${movie.title} | ${movie.release_date} | ${movie.overview}\n`;
        content += '\n';
    });

    // represent the content as a file-like object
    const blob = new Blob([content], { type: "text/plain" });

    // link the file-like object (blob) to an anchor tag
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${exportName}.txt`;

    // trigger the download
    a.click();

    URL.revokeObjectURL(url);
}