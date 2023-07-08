
var allImgTags=document.images
console.log(allImgTags)

for(i=0;i<allImgTags.length;i++)
{
    allImgTags[i].src=`./${i}.jpg`
    allImgTags[i].addEventListener("click",function()
    {
        document.getElementById("bigimage").style.backgroundImage=`url(${this.src})`
    })
    
}
