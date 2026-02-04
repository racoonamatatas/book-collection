<template>
    <nav>
        <router-link :to="{name: 'books.overview'}">Book Overview</router-link>
        <router-link :to="{name: 'books.create'}">New Book</router-link>
    </nav>
    <router-view></router-view>    
</template>