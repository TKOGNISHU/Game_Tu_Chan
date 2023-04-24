<template>
    <section class="toast-container position-fixed bottom-0 end-0 p-3">
        <div :id="idToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img src="..." class="rounded me-2" alt="...">
                <strong class="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                {{ message }}
            </div>
        </div>
    </section>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
    props: {
        idToast: { type: String, default: 'abc', },
        isShow: { type: Boolean, default: false, },
        message: { type: String, default: '', },
    },
    data() {
        return {}
    },
    watch: {
        isShow() {
            const toastLiveExample = document.getElementById(idToast)
            const toast = new Toast(toastLiveExample)
            toast.show()
        }
    }
    /**
     * Show toast
     *  const toastLiveExample = document.getElementById('liveToast')
        const toast = new Toast(toastLiveExample)
        toast.show()
     */
}
</script>
