<h1 align="center"> twitter-clone 
<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/350/bird_1f426.png" alt="bird emoji" width="40" /> </h1>  

#### Click [here](https://lisa-go.github.io/twitter-clone/) for live preview.
! Disclaimer: page might take some time to load at first since I am using a free tier server. 
<br><br>

# Made with

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
<br><br>

# Description

#### A clone of popular social media site [Twitter](https://twitter.com). Tweets composed are sent to the database I built with mongoDB.
<br><br>

# Features
- Responsive design, mimicking the original Twitter website. Mobile-Friendly.
- Compose tweet adds tweets to the database and displays it on the homepage.
- Explore tab on the link bar brings you to another page showing the top liked tweets.
- Tweet button on the sidebar opens a modal with the same compose component.
- Form validation for tweet composing.
- Account tab on the bottom of the linkbar tracks the Picture, Name, and @Username input on the compose form.
- Clicking on Like or Retweet increases the count of whichever is clicked, this number is sent to the database, the button is then lit up while the tweet is 'liked' or 'retweeted'.
- Clicking on Like or Retweet again in the same browsing session will 'unlike' or 'unretweet', decreasing the count from the database.
- Right panel displays a few of the top liked tweets.
- Fixed Sidebar and Right Panel.
<br><br>

# Previews

### Home Page
<img src="https://i.imgur.com/CbyoGwY.png" alt="homepage" width="700" />

### Tweet Modal
<img src="https://i.imgur.com/EMVutq7.png" alt="modal" width="700" />

### Discover Page
<img src="https://i.imgur.com/dixja4l.png" alt="discoverpage" width="700" />

### Home Page Small Window
<img src="https://i.imgur.com/lo30O74.png" alt="small window" width="550" />

### Home Page Mobile
<img src="https://i.imgur.com/hVy6KTK.png" alt="mobilehomepage" width="300" />

### Mobile Compose Modal
<img src="https://i.imgur.com/elHxmhZ.png" alt="mobilecompose" width="300" />

### Mobile Discover Page
<img src="https://i.imgur.com/4tzZ7ok.png" alt="mobilediscover" width="300" />
<br><br>

# Things I learned from this Project

* This was my first attempt at responsive design, using media query for the first time.
```scss
@media screen and (max-width: $v1 ) {
    #linkcont {
        left: 0;
    }

    #linkbar {
        .links {
            padding: 0;
            padding-top: 1rem;
        }
    }
}
```
* Better understanding of States, when figuring out how to make only one button light up instead of all. ie. when pressing a 'like' button, only the 'like' button for that tweet lights up, not all.
* How to create my own database with MongoDB.
* Better understanding of ternary operators in React
```js
    <div className="pink" onClick={() => likeStatus(tw)}
        style={like ? { color: '#ee7387' } : {}}>
        <HiOutlineHeart size={18.75}
            style={like ? { fill: '#ee7387' } : {}} />
        <span>{tw.likes}</span>
    </div>
```
* The convenience of using react-icons! Almost all icons I used in this project was from the react-icons library.
* How to use basename for react-router-dom instead of hashrouter.
* Better understanding of the implementation of axios with api.
* How to remove the default view of file input.
* Form validation and displaying validation with css with colors.
* Reusing components with the Modal tweet component and homepage tweet component.
* How to use a set list of images if an image source doesn't exist.
```js 
    const defaultImages = [cat0, cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9]

    const defaultIcon = (e) => {
        let pic = Math.floor(Math.random() * 10);
        e.target.src = defaultImages[pic];
    }
```
```js
    <img src={tw.picon} alt={tw.pname} onError={defaultIcon} />
```
* How to manipulate the time data with moment library.
```
npm install moment --save
```
* How to implement clicking outside a modal to close the modal, and how to prevent it from happening while clicking on the modal itself.
```js
    onClick={(e) => e.stopPropagation()}
```
* How to implement a fixed sidebar. It was hard to get the positioning right and also make sure the tweets container wasn't behind the sidebar.
* Navigate function of react-router-dom to send '/' path directly to '/home'
```js
<Route path="/"
        element={<Navigate to="/home" />} />
```
