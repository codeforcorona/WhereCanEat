<template>
  <div class="m-auto text-left">
    <Card shadow :bordered="false" :padding=2 class="h-64 w-64">
      <img class="w-full h-20 object-cover" src="@/assets/images/food2.jpeg" :alt="imgAlt"> 
      <div class="px-6 py-4">
       <div class="mb-2">
          <a 
            :href="url" 
            class="truncate text-orange-600 hover:underline hover:text-orange-700 w-64 font-bold text-xl">
           {{ shortenText(name) }}
          </a>
       </div>
        <p class="text-gray-700 text-base">{{ cuisine }}</p>
      </div>
      <div class="px-8 space-y-3">
       <span class="inline-block break-normal bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700 mr-2">{{ getTime(time) }}</span>
       <span class="inline-block bg-gray-200 rounded-full p-2 text-sm font-semibold text-gray-700">{{rate}}</span>
      </div> 
    </Card>
  </div>

</template>

<script>
  export default {
    props: ['cuisine', 'name', 'time', 'rate', 'img', 'imgAlt','url'],
    methods: {
      shortenText: function(text) {
        if (text.length > 20) {
          return String(text).substr(0,17) + "..."
        }
        return String(text).substr(0,20)
      },
      getTime: function(text) {
        if (text.toLowerCase().search("closed") == -1) {
          return "~" + text + " Mins"
        } else {
          return "CLOSED"
        }
      }
    }
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