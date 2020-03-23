<template>
  <div>
    <div class="wrap" id="contact">
      <div class="content">
        <h2 class="effect up">CONTACT</h2>
        <div class="line effect up"></div>
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8 effect up" data-delay="100">
            <p class="mb-5">お仕事のご依頼などはこちらからお問い合わせください。</p>
            <b-form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScjPB2zZgQCPEvfnBMsXoAj06Smx9h_dvUu26LFTy2Wbg4gwQ/formResponse" name="contact">
              <b-form-group id="email-group" label="メールアドレス（必須）" label-for="email">
                <b-form-input id="email" name="entry.215251555" type="email" placeholder="メールアドレス" required></b-form-input>
              </b-form-group>
              <b-form-group id="content-group" label="お問い合わせ内容（必須）" label-for="content">
                <b-form-textarea id="content" name="entry.381964019" placeholder="お問い合わせ内容" rows="8" required></b-form-textarea>
              </b-form-group>
              <div class="text-center">
                <!-- <a href="javascript:document.contact.submit()" class="button effect lr" data-delay="200">
                  お問い合わせ内容を送信
                </a> -->
                <b-button type="submit" class="button effect lr" data-delay="200">お問い合わせ内容を送信</b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
