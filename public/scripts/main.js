class Main {
    constructor() {
        this.pageViewsKey = 'pageViewsCount';
        this.initializeCounter();
        this.displayCount();
        this.clickButton1();
        this.clickButton2();
        this.downArrow();
    }

    initializeCounter() {
        if (!localStorage.getItem(this.pageViewsKey)) {
            localStorage.setItem(this.pageViewsKey, '0');
        }
    }

    incrementCount() {
        let currentCount = parseInt(localStorage.getItem(this.pageViewsKey));
        currentCount++;
        localStorage.setItem(this.pageViewsKey, currentCount.toString());
    }

    displayCount() {
        this.incrementCount();
        // Update count in div id count
        document.getElementById('count').innerHTML = 'You have visited this page ' + localStorage.getItem(this.pageViewsKey)  + ' times.'
    }

    clickButton1() {
        const button1 = document.getElementById('button1');
        button1.addEventListener('click', function () {
            alert("boop")
        });
    }

    clickButton2() {
        const button2 = document.getElementById('button2');
        button2.addEventListener('click', function() {
            localStorage.setItem(this.pageViewsKey, '0');
        })
    }

    downArrow() {
        addEventListener('keyup', function() {
            let currentCount = parseInt(localStorage.getItem(this.pageViewsKey));
            currentCount++;
            localStorage.setItem(this.pageViewsKey, currentCount.toString());
            document.getElementById('count').innerHTML = 'You have visited this page ' + localStorage.getItem(this.pageViewsKey)  + ' times.'
        });
    }

}

// Note that we construct the class here, but we don't need to assign it to a variable.
document.mainClass = new Main();
