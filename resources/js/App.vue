<template>
    <nav>
        <router-link :to="{name: 'books.overview'}">Book Overview</router-link>
        <router-link :to="{name: 'books.create'}">Add New Book</router-link>
        <router-link :to="{name: 'authors.overview'}">Author Overview</router-link>

    </nav>
    <router-view></router-view>    
</template>