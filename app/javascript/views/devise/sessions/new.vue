<script>
  // reusable component containing hidden fields for authenticity token
  import CSRF from 'components/shared/csrf.vue';

  export default {
    // register component to be usable in views
    components: {
      csrf: CSRF
    },
    props: {
     errors: Array
   },
   // data = state
   data: function() {
      return ({
        user: {
          email: '',
          password: ''
        }
      });
    }
  }
</script>

<template>
  <div class="">
    <!-- display errors -->
    <el-alert v-for="error in errors"
      type="error"
      :title="error"
      :closable="false"
    >
  </el-alert>
  <el-container class="bg-light" style="height: 100vh;">
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="12">
          <el-card class="box-card" style="width: 100%">
            <div slot="header" class="clearfix">
              <h3>Log in</h3>
            </div>
            <!-- form for the sign up -->
            <el-form :model="user" label-position="top" method="post" action="/users/sign_in">
              <!-- call csrf to use hidden fields -->
              <csrf></csrf>

              <el-form-item label="Email" prop="email" required>
                <el-input name="user[email]" v-model="user.email" type="email">
                </el-input>
              </el-form-item>

              <el-form-item label="Password" prop="password" required>
                <el-input v-model="user.password" name="user[password]" type="password">
                </el-input>
              </el-form-item>

              <el-form-item>
                <el-button native-type="submit" type="primary" class="m-t-10">
                  Log in
                </el-button>
              </el-form-item>
            </el-form>

            <a href="/users/sign_up">
              <el-button type="text" style="margin-left: 10px">
                Sign Up
              </el-button>
            </a>

          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</div>
</template>

<style scoped>
  /*some style which will only be applied to content in this component*/
  .box-card {
    margin-top: 30px;
  }
</style>
