<template>
  <div>
    <div class="wrap" id="contact">
      <div class="content">
        <h2 class="effect-fade">CONTACT</h2>
        <div class="line effect-fade"></div>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6 effect-fade">
            <b-form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjPB2zZgQCPEvfnBMsXoAj06Smx9h_dvUu26LFTy2Wbg4gwQ/formResponse">
              <b-form-group id="email-group" label="メールアドレス（必須）" label-for="email">
                <b-form-input id="email" name="entry.215251555" type="email" required placeholder="メールアドレス"></b-form-input>
              </b-form-group>
              <b-form-group id="content-group" label="お問い合わせ内容（必須）" label-for="content">
                <b-form-textarea id="content" name="entry.381964019" required placeholder="お問い合わせ内容" rows="5"></b-form-textarea>
              </b-form-group>
              <b-button type="submit" variant="dark">送信</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
