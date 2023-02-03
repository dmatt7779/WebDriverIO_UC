describe('window and Frames Miscellanous', async() => {

/*     it('Parent and Child windows switch', async() => {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        const newTab = await $('.blinkingText');
        await newTab.click();
        const handleWindows = await browser.getWindowHandles();//give an array with all the tabs opened - example 2 windows // use to be used to change between tabs
        await browser.switchToWindow(handleWindows[1]);
        let newTabTitleLocator = await $('h1');
        await newTabTitleLocator.waitForDisplayed();
        console.log(await newTabTitleLocator.getText());
        await browser.pause(5000);
        await browser.closeWindow();
        await browser.switchToWindow(handleWindows[0]);// Aqui esta regresando a la posicion inicial o al tab padre es decir, posicion 0
        console.log(await browser.getTitle());
        //newWindow method open a new window of the app still running the test above
        await browser.newWindow('https://google.com');
        console.log(await browser.getTitle());
        await browser.pause(3000);
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/"); //se ingresa nuevamente la url a la cual se quiere ingresar, cierra el tab y abre uno nuevo
        let usernameLocator = $('#username');
        await usernameLocator.setValue('HOLA YA REGRESÉ');
        await browser.pause(3000);
    }) */

    it('switch between Frames', async() => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        const btnIdMouseHover = await $('#mousehover');
        await btnIdMouseHover.scrollIntoView(0,1000);
        console.log("Lenght of a tags => " + await $$('a').length)//27
        const iFrameToSwitch = await $('#courses-iframe');
        await browser.switchToFrame(iFrameToSwitch)
        console.log("TagName of Courses link into the IFRAME => " + await $('=Courses').getTagName())
        console.log("Lenght of the iFrame inside => " + await $$('a').length)//111
        await browser.switchToFrame(null)
        console.log("Lenght of a tags => " + await $$('a').length)//27
        browser.pause(5000)
    })
})