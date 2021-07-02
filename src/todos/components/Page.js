export default function Page({title}) {
    const titlePage = document.getElementsByTagName('title');

    titlePage[0].innerText = title;
}