class MagazineStatus {
    constructor(name, NextStatus) {
        this.name = name;
        this.NextStatus = NextStatus;
    }

    next() {
        return new this.NextStatus();
    }
}

class ReadyForPushNotification extends MagazineStatus {
    constructor() {
        super('readyForPushNotification', ReadyForApprove);
    }
}

class ReadyForApprove extends MagazineStatus {
    constructor() {
        super('readyForApprove', ReadyForPublishing);
    }
}

class ReadyForPublishing extends MagazineStatus {
    constructor() {
        super('readyForPublishing', PublishingInProgress);
    }
}

class PublishingInProgress extends MagazineStatus {
    constructor() {
        super('publishingInProgress', PublishingInProgress);
    }
}

class Magazine {
    constructor() {
        this.state = new ReadyForPushNotification();
        this.staff = [];
        this.articles = [];
        this.followers = {

        }
    }

    nextState() {
        this.state = this.state.next();
    }

    notifyAll() {
        console.log();
    }
}

class MagazineEmployee {
    constructor(name, role, magazine) {
        this.name = name;
        this.role = role;
        this.magazine = magazine;
    }

    addArticle(articleText) {
        const enoughNumberOfPublishedArticles = 5;

        this.magazine.staff.push(this.role);

        this.magazine.staff.includes(this.role) && this.role !== 'manager' ?
            this.magazine.articles.push( { articleHeader: this.role, articleText: articleText } ) :
            console.log('You do not have permission to do it.');

        if (this.magazine.articles.length >= enoughNumberOfPublishedArticles) {
            this.magazine.nextState();
        }
    }

    approve() {
        if (this.magazine.state.name === 'readyForPushNotification' &&
            this.role === 'manager') {
            console.log(`Hello, ${this.name}. You can't approve. We don't have enough of publications.`);
        } else if (this.magazine.state.name === 'readyForPushNotification' &&
                this.role !== 'manager') {
            console.log('You do not have permission to do it.');
        }

        if (this.magazine.state.name === 'readyForApprove' &&
            this.role === 'manager') {
            console.log(`Hello, ${this.name}. You've approved the changes.`);
            this.magazine.nextState();
        } else if (this.magazine.state.name === 'readyForApprove' &&
            this.role !== 'manager') {
            console.log('You do not have permission to do it.');
        }

        if (this.magazine.state.name === 'readyForPublishing' &&
            this.role === 'manager') {
            console.log(`Hello, ${this.name}. Publications have been already approved by you.`);
        } else if (this.magazine.state.name === 'readyForPublishing' &&
            this.role !== 'manager') {
            console.log('You do not have permission to do it.');
        }

        if (this.magazine.state.name === 'publishingInProgress' &&
            this.role === 'manager') {
            console.log(`Hello, ${this.name}.  While we are publishing we can't do any actions.`);
        } else if (this.magazine.state.name === 'publishingInProgress' &&
            this.role !== 'manager') {
            console.log('You do not have permission to do it.');
        }
    }

    publish() {
        if (this.magazine.state.name === 'readyForPushNotification' &&
            this.magazine.staff.includes(this.role) &&
            this.role !== 'manager') {
            console.log(`Hello, ${this.name}.  You can't publish. We are creating publications now.`);
        } else if (this.magazine.state.name === 'readyForPushNotification' && this.role === 'manager') {
            console.log('You do not have permission to do it.');
        }

        if (this.magazine.state.name === 'readyForApprove' &&
            this.magazine.staff.includes(this.role) &&
            this.role !== 'manager') {
            console.log(`Hello, ${this.name}. You can't publish. We don't have manager's approval.`);
        } else if (this.magazine.state.name === 'readyForApprove' && this.role === 'manager') {
            console.log('You do not have permission to do it.');
        }

        if (this.magazine.state.name === 'readyForPublishing' &&
            this.magazine.staff.includes(this.role) &&
            this.role !== 'manager') {
            console.log(`Hello, ${this.name}. You've recently published publications.`);
            this.magazine.nextState();
            this.magazine.notifyAll();
            const resetTimeout = 60000;
            setTimeout(() => {
                this.magazine.state = new ReadyForPushNotification();
            }, resetTimeout);
        } else if (this.magazine.state.name === 'readyForPublishing' && this.role === 'manager') {
            console.log('You do not have permission to do it.');
        }

        if (this.magazine.state.name === 'publishingInProgress' &&
            this.magazine.staff.includes(this.role) &&
            this.role !== 'manager') {
            console.log(`Hello, ${this.name}.  While we are publishing we can't do any actions.`);
        } else if (this.magazine.state.name === 'publishingInProgress' && this.role === 'manager') {
            console.log('You do not have permission to do it.');
        }
    }
}

class Follower {
    constructor(name) {
        this.name = name;
    }

    subscribeTo(magazine, topic) {
        if (magazine.staff.includes(topic)) {
            magazine.followers.topic += ` ${this.name}`;
        } else {
            console.log('Sorry, such a topic does not exist.');
        }
    }

    unsubscribeFrom(magazine, topic) {
        if (Object.keys(magazine.followers).includes(topic) &&
            magazine.followers.topic.includes(` ${this.name}`)) {
            magazine.followers.topic =
                magazine.followers.topic
                    .split(' ')
                    .filter(follower => follower !== `${this.name}`)
                    .join(' ');
        }
    }

    onUpdate(data) {
        console.log(data);
    }
}