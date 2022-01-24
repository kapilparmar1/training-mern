const url1 = 'https://cdn.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg';
const url2 = 'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg';

function download() {
    downloadImage(url1);
    downloadImage(url2);

}



function downloadImage(url) {
    console.log(`Downloading.... from ${url}`);
    axios({
        url: url,
        method: 'GET',
        responseType: 'blob'
    })
        .then((response) => {
            const url = window.URL
                .createObjectURL(new Blob([response.data]));
            console.log(response.data);
            const link = document.createElement('a');
            link.href = url;
            console.log(url);
            link.setAttribute('download', 'image.png');
            document.body.appendChild(link);
            link.click();
            console.log(link);
        })
}