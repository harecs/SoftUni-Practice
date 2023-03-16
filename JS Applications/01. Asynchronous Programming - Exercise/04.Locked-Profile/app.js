function lockedProfile() {
    const mainElement = document.getElementById('main');
    displayProfiles();

    async function displayProfiles() {
        const profilesInfo = await getProfilesInfo();

        Object.values(profilesInfo)
            .forEach((profileInfo, i) => {
                if (i === 0) {
                    fulfillInfo(document.getElementsByClassName('profile')[0], profileInfo);
                } else {
                    const profileCardElement = createProfileCardElement();
                    fulfillInfo(profileCardElement, profileInfo);
                    mainElement.appendChild(profileCardElement);
                }
            })
    }

    async function getProfilesInfo() {
        try {
            let response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');

            if (!response.ok) {
                throw 'Error with response';
            }

            let data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }


    }

    function createProfileCardElement() {
        return document.getElementsByClassName('profile')[0].cloneNode(true);
    }

    function fulfillInfo(profileCardElement, profileInfo) {
        console.log(profileInfo);
        profileCardElement.querySelector('[name="user1Username"]').value = profileInfo.username;
        profileCardElement.querySelector('[name="user1Email"]').value = profileInfo.email;
        profileCardElement.querySelector('[name="user1Age"]').value = profileInfo.age;

        return profileCardElement;
    }
}