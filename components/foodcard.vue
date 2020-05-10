<template>
  <div class="p-2 px-2 text-left">
    <Card shadow :bordered="false" class="p-2">
      
      <img class="w-full" :src="img" :alt="imgAlt"> 
      <div class="px-6 py-4">
       <div class="font-bold text-xl mb-2">
         <a :href="url" class=" text-orange-600 hover:underline hover:text-orange-700">{{ name }}</a>
       </div>
        <p class="text-gray-700 text-base">{{ cuisine }}</p>
      </div>
      <div class="px-8 py-4">
       <span class="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-2">~{{time}} min</span>
       <span class="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700">{{rate}}</span>
      </div> 

    </Card>
  </div>

</template>

<script>
  export default {
    props: ['cuisine', 'name', 'time', 'rate', 'img', 'imgAlt','url'],
  }

</script>

<style scoped>
</style>

<!--
      <div> 
        <p slot="title" class="border-b border-gray-500 p-2 bg-yellow-300">
          <span>
            <div class="font-bold text-red-700 uppercase leading-snug">
              <a :href="url" class=" text-orange-600 hover:underline hover:text-orange-700">{{ name }}</a>
            </div>
          </span>
        </p>
         <div class="mt-2">
            <div class="txt-xs text-yellow-600 font-bold">{{ cuisine}}</div>
            <div class="mt-2 text-sm text-yellow-900">{{ time }}</div>
          </div>
      </div>
-->