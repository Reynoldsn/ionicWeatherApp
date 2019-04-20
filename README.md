# ionicWeatherApp
Ionic 4 weather app

```
ion-header, ion-content {
    --ion-background-color: #f8f8f8;
}

.icon {
    color: #004c97; 
}

.wa {
  &-navbar {
    padding: 16px 0;
    --background: #f8f8f8;
  }

  &-header__title {
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    color: #004c97;
  }

  &-zip {
    color: #004c97;

    button {
      background-color: transparent;
    }
  }

  &-input {
    color: #004c97;
  }

  &-nav__button {  
    button {
      background-color: transparent;
      padding: 0 5px !important;
    }
  }

  &-temp__location {
    color: #57524F;
    text-align: center;
    padding-top: 15px;
    font-size: 30px;
  }

  &-temp__container {
    background-color: #fff;
    color: #57524F;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }

  &-temp__current {
    font-size: 35px;
    color: #f99110;
    align-self: center;
  }

  &-temp__high-low {
    text-align: center;
    position: relative;
    top: -20px;
    color: #57524F;
    font-size: 18px;
  }

  &-temp__container-footer {
    border-top: 1px solid #d3d3d3;
    text-align: center;
    color: #57524F;
    font-size: 16px;
    margin: 15px 25px 0;
    padding-top: 10px;
    position: relative;
  }

}
```
