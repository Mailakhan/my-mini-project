function result(){
    let text=document.getElementById('txt').value;
    let result=document.getElementById('result')
    let image=document.getElementById('img')
    let other_image=image.getElementsByTagName('img')[0]
    const images=[
 "https://th.bing.com/th/id/OIP.HCvoxsojAQ7WH8Opj368swAAAA?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.P52v3f_zyGXwOnUJRv5chAHaHa?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.dLdd_8nCY-77kl_-CWt-KwHaHa?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.0iOm1739ypN19Y6eRamvOAAAAA?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.g3qkwwnxzlUDah4ag9ZqNAHaIC?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.7NXsQMzBrkRIh4S0Iiz7jwHaKD?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.0bs-itJqJzLUlRSy1QWvMAHaHa?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.nx-ApSI9L7txTyvsy30I5wAAAA?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.sfrr-Zf_-qs7QrtleQdcvgHaHa?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.mQw7_AyTEmZhCtaNwmTRpwAAAA?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/R.d35e8ef712ea10c190060dac926a154b?rik=umzNqOt7qUYV0Q&pid=ImgRaw&r=0",
 "https://th.bing.com/th/id/OIP.loBJgcMyrFSWAWk-ZnRgAwHaHa?rs=1&pid=ImgDetMain",
 "https://cdn2.vectorstock.com/i/1000x1000/89/01/letter-m-cartoon-alphabet-for-children-monkey-vector-10188901.jpg",
 "https://th.bing.com/th/id/R.9a8a50096223ac12bf3decd16b883f65?rik=Qjm7lLKiKGie%2bg&pid=ImgRaw&r=0",
 "https://th.bing.com/th/id/OIP.7XngEgVh2y0ycFRTsJw2AwHaFE?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.XZl_imQIyHYITFK3CiVwuwAAAA?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.tQdrMuD8mAeBOqdZAsQenAHaHa?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/R.ab1c6b5d6603e14eaf6b322e4ccffb0a?rik=W8o72wa6GaraQA&pid=ImgRaw&r=0",
 "https://th.bing.com/th/id/R.26d58e150f59c441478d6883006965be?rik=g0pc3mvB3BRaTw&pid=ImgRaw&r=0",
 "https://th.bing.com/th/id/OIP.go7KDVdSvfDtb3dyjagvjQHaHa?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.eo61RPc6rugymLoSLMdx9QHaKe?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.N1ZMXHcRhP9D22yjJy31AAHaHa?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/R.7b2499cd6c2eb7e7da6b5bbdf0cceeb3?rik=esseofdco7q0Aw&pid=ImgRaw&r=0",
 "https://th.bing.com/th/id/OIP.jGMdMKYwnpmwxIV4wDByZQHaHa?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.cInhpuBAImojoBjx5fTGFwHaKD?rs=1&pid=ImgDetMain",
 "https://th.bing.com/th/id/OIP.1ckiD0nlgo-_t3mztC8zvQHaHa?rs=1&pid=ImgDetMain"

        
    ]
    switch(text){
case "A":
    result.innerHTML="A for <strong>Apple</strong>";
    other_image.src=images[0];
    image.getElementsByTagName('img')[1].style.display='none';
    break;
    case "B":
        result.innerHTML="B for <strong>Ball</strong>";
    other_image.src=images[1];
    image.getElementsByTagName('img')[1].style.display='none';
break;
case "C":
    result.innerHTML="C for <strong>Cat</strong>";
other_image.src=images[2];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "D":
    result.innerHTML="D for <strong>Dog</strong>";
other_image.src=images[3];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "E":
    result.innerHTML="E for <strong>Elephent</strong>";
other_image.src=images[4];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "F":
    result.innerHTML="F for <strong>Fish</strong>";
other_image.src=images[5];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "G":
    result.innerHTML="G for <strong>Goat</strong>";
other_image.src=images[6];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "H":
    result.innerHTML="H for <strong>Hat</strong>";
other_image.src=images[7];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "I":
    result.innerHTML="I for <strong>Igloo</strong>";
other_image.src=images[8];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "J":
    result.innerHTML="J for <strong>Jelly</strong>";
other_image.src=images[9];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "K":
    result.innerHTML="K for <strong>Kite</strong>";
other_image.src=images[10];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "L":
    result.innerHTML="L for <strong>Lion</strong>";
other_image.src=images[11];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "M":
    result.innerHTML="M for <strong>Munkey</strong>";
other_image.src=images[12];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "N":
    result.innerHTML="N for <strong>Neck</strong>";
other_image.src=images[13];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "O":
    result.innerHTML="O for <strong>Oar</strong>";
other_image.src=images[14];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "P":
    result.innerHTML="P for <strong>Pillow</strong>";
other_image.src=images[15];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "Q":
    result.innerHTML="Q for <strong>Queen</strong>";
other_image.src=images[16];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "R":
    result.innerHTML="R for <strong>Rain</strong>";
other_image.src=images[17];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "S":
    result.innerHTML="S for <strong>Sandals</strong>";
other_image.src=images[18];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "T":
    result.innerHTML="T for <strong>Tree</strong>";
other_image.src=images[19];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "U":
    result.innerHTML="U for <strong>Umbrella</strong>";
other_image.src=images[20];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "V":
    result.innerHTML="V for <strong>Van</strong>";
other_image.src=images[21];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "W":
    result.innerHTML="W for <strong>Wheel</strong>";
other_image.src=images[22];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "X":
    result.innerHTML="X for <strong>Xray</strong>";
other_image.src=images[23];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "Y":
    result.innerHTML="Y for <strong>Yo-yo</strong>";
other_image.src=images[24];
image.getElementsByTagName('img')[1].style.display='none';
break;
case "Z":
    result.innerHTML="Z for <strong>Zebra</strong>";
other_image.src=images[25];
image.getElementsByTagName('img')[1].style.display='none';
break;
    }
}