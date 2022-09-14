const Contact = () => (
    <section>
        <div class="container">
            <a id="contact_me"> </a>
            <h2 class="title is-3">Intrigued? Let's connect!</h2>
            <form>
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input column is-half" type="text" placeholder="Your Name?" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input column is-half" type="email" placeholder="Your Email?"  />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea is-primary" placeholder="Your Message?" rows="7"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </section>
)

export default Contact