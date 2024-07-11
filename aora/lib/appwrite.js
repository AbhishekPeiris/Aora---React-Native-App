import { Client } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: "com.jsm.aora",
    projectId: '668f539c002ce31a31ad',
    databaseId: '668f5676000cf7fef8af',
    userCollectionId: '668f56b7001351e9440e',
    videoCollectionId: '668f56fb0009c6db9556',
    storageId: '668f613f0002d04af874'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);

export const createUser = () => {

    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });

}


