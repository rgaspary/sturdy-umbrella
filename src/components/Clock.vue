<template>
    <div id="Clock">
        This is the clock module
    </div>
</template>

<script>
export default {
    name: 'Clock',
    methods: {
        /**
         * Get's the current date.
         * @returns {String} - Today's date correctly formated.
         */
        getDate: () => {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return(`${month} / ${day} / ${year}`);
        },
        /**
         * Get's the current time.
         * @returns {String} - The current time properly formatted.
         */
        getTime: () => {
            const today = new Date();
            const hourUTC = today.getHours();
            const amPm = hourUTC >= 12 ? 'pm' : 'am';
            const hourNotUTC = hour % 12;
            const hour = hourNotUTC ? hourNotUTC : '12';
            const minutes = today.getMinutes();
            // const seconds = today.getSeconds();

            return(`${hour}:${minutes} ${amPm}`);
        }
    }
}
</script>

<style lang="scss" scoped>
    #Clock {
        
    }
</style>