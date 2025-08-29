import { ref } from "vue";
const ticks = ref(0);

function handel() {
    ticks.value++;
    requestAnimationFrame(handel);
}

handel();

export { ticks }