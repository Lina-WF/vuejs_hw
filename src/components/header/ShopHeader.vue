<script setup>
import SearchBar from './SearchBar.vue'
import Navigation from './Navigation.vue';
import { useFilterStore } from '../../stores/filter';

const filterStore = useFilterStore();
</script>
 
<template>
<div class="header">
    <div class="logo">
        <RouterLink :to="{name:'home'}" @click="filterStore.clearFilter()">Logo</RouterLink>
    </div>
    <SearchBar />
    <div class="nav-web">
        <Navigation />
    </div>
    <div class="nav-mobile">
        <a class="menu">Меню</a>
        <div class="dropdown-content">
            <Navigation />
        </div>
    </div>
</div>
</template>

<style scoped>
.header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.logo{
    text-align: left;
    padding-left: 5%;
    padding-top: 2%;
    font-size: 1.3em;
    width: 20%;
}
.nav-web{
    text-align: right;
    padding-right: 5%;
    padding-top: 1%;
    width: 20%;
    
}

.nav-web .router-link-active, 
.nav-mobile .router-link-active{
  color: #8820b5;
  text-decoration: underline;
}

.nav-web .router-link-active:hover, 
.nav-mobile .router-link-active:hover{
  color: #e4adfc;
}

.nav-mobile{
    display: none;
    width: 15%;
    margin: auto;
    padding: 3% 2%;
}

.dropdown-content {
    display: none;
    position: absolute;
    right: 1.7%;
    min-width: 100px;
    z-index: 1;
    text-align: center;
    background-color: #4e4153;
    border-radius: 8px;
}

.menu{
    cursor: pointer;
    color: #b058d6;
}

.nav-mobile:hover {
    background-color: #4e4153;
    border-radius: 8px;
}
.nav-mobile:hover .dropdown-content {
    display: block;
}

@media (max-width: 785px) {
    .nav-web{
        display: none;
    }
    .logo{
        display: none;
    }
    .nav-mobile{
        display: block;
    }
}

@media (prefers-color-scheme: light) {
    .dropdown-content, .nav-mobile:hover {
        background-color: #d9c6e1;
    }

    .nav-web .router-link-active:hover, 
    .nav-mobile .router-link-active:hover{
        color: #7f4697;
    }
}
</style>
