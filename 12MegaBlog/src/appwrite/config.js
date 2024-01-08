import conf from '../conf/conf.js'
import { Storage, Client, Databases, ID, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabseId,
                appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug){
         try {
           await this.databases.deleteDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug
            );
            return true
         } catch (error) {
            console.log(error);
            return false 
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("AppWrite :: Error",error)
            return false
        }
    }


    async getPosts(quries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                quries,
            )
        } catch (error) {
            console.log('Appwrite Error:: Not getting posts',error);
            return false;
        }

    }

    //file upload services
    
    async uploadFile(file){
        try {
         return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
         );      
        } catch(error){
            console.log('AppWrite Error',error);
            return false
        }
    }

    async deleteFile(fileId){
       try {
          return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            file
          );
          return true
       } catch (error) {
        console.log('AppWrite ::', error);
        return false
       }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }


}

const service = new Service();

export default service;