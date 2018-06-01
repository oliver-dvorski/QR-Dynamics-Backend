<template>
    <div class="my-8">
        <div class="flex flex-col md:flex-row">
            <div class="md:mr-8 w-full lg:w-auto">
                <FancyInput label="Recipient" type="email" placeholder="contact@oliverdvorski.com" v-model="recipient"></FancyInput>
                <FancyInput label="Subject (optional)" type="text" placeholder="Heads or tails?" v-model="subject"></FancyInput>
                <FancyInput label="Message body (optional)" type="textarea" :placeholder="razor" v-model="body"></FancyInput>
            </div>
            <div>
                <QR class="mt-8" :string="emailCode"></QR>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                recipient: '',
                subject: '',
                body: '',
                razor: 'Occam\'s razor is the problem-solving principle that, when presented with competing hypothetical answers to a problem, one should select the answer that makes the fewest assumptions. The idea is attributed to William of Ockham (c. 1287–1347), who was an English Franciscan friar, scholastic philosopher and theologian.'
            }
        },
        computed: {
            emailCode() {
                return `MATMSG:TO:${this.recipient};SUB:${this.subject};BODY:${this.body};;`
            }
        }
    }
</script>
