import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';


export default defineNuxtPlugin((nuxtApp) => {

      nuxtApp.vueApp.use(TawkMessengerVue, {

                      propertyId : 'https://tawk.to/chat/64dd45e2cc26a871b02fadbd',

                      widgetId : '1h805hv51'

     });

});