<template>
	<div class="form-demo">
		<div class="p-d-flex p-jc-center">
			<div class="card">
				<h1 class="p-text-center">Inregistreaza-te</h1>
				<form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
					<div class="p-field">
						<div class="p-float-label">
							<InputText
								id="first-name"
								v-model="v$.firstName.$model"
								:class="{ 'p-invalid': v$.firstName.$invalid && submitted }"
							/>
							<label for="firstName" :class="{ 'p-error': v$.firstName.$invalid && submitted }">Prenume*</label>
						</div>
						<small
							v-if="(v$.firstName.$invalid && submitted) || v$.firstName.$pending.$response"
							class="p-error"
						>{{ v$.firstName.required.$message.replace('Value', 'First Name') }}</small>
					</div>

					<div class="p-field">
						<div class="p-float-label">
							<InputText
								id="last-name"
								v-model="v$.lastName.$model"
								:class="{ 'p-invalid': v$.lastName.$invalid && submitted }"
							/>
							<label for="lastName" :class="{ 'p-error': v$.lastName.$invalid && submitted }">Nume*</label>
						</div>
						<small
							v-if="(v$.lastName.$invalid && submitted) || v$.lastName.$pending.$response"
							class="p-error"
						>{{ v$.lastName.required.$message.replace('Value', 'Last Name') }}</small>
					</div>

					<div class="p-field">
						<div class="p-float-label p-input-icon-right">
							<i class="pi pi-envelope" />
							<InputText
								id="email"
								v-model="v$.email.$model"
								:class="{ 'p-invalid': v$.email.$invalid && submitted }"
								aria-describedby="email-error"
							/>
							<label for="email" :class="{ 'p-error': v$.email.$invalid && submitted }">Email*</label>
						</div>
						<span v-if="v$.email.$error && submitted">
							<span id="email-error" v-for="(error, index) of v$.email.$errors" :key="index">
								<small class="p-error">{{ error.$message }}</small>
							</span>
						</span>
						<small
							v-else-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response"
							class="p-error"
						>{{ v$.email.required.$message.replace('Value', 'Email') }}</small>
					</div>
					<div class="p-field">
						<div class="p-float-label">
							<Password
								id="password"
								v-model="v$.password.$model"
								:class="{ 'p-invalid': v$.password.$invalid && submitted }"
								toggleMask
							></Password>
							<label for="password" :class="{ 'p-error': v$.password.$invalid && submitted }">Parola*</label>
						</div>
						<small
							v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response"
							class="p-error"
						>{{ v$.password.required.$message.replace('Value', 'Password') }}</small>
					</div>
					<Button type="submit" label="Creeaza cont" class="p-mt-2" />
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import UserService from '../services/UserService.js'
import axios from 'axios'

export default {
	setup() {
		const router = useRouter()

		const state = reactive({
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		});

		const rules = {
			firstName: { required },
			lastName: { required },
			email: { required, email },
			password: { required },
		};

		const submitted = ref(false);
		const v$ = useVuelidate(rules, state);

		const handleSubmit = (isFormValid) => {
			submitted.value = true;

			if (!isFormValid) {
				return;
			}

			UserService.register(state)
				.then(response => {
					localStorage.setItem('userName', response.data.firstName + " " + response.data.lastName)
					localStorage.setItem('email', response.data.email)
					localStorage.setItem('userId', response.data.userId)

					const jwt = response.headers.authorization.substring(7);
					axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`
					router.push('/')
				})
				.catch(error => {
					console.log(error)
				})

			// resetForm();
		}
		const resetForm = () => {
			state.firstName = '';
			state.lastName = '';
			state.email = '';
			state.password = '';
		}

		return { state, v$, handleSubmit, submitted }
	}
}
</script>

<style lang="css" scoped>
.form-demo .card {
	min-width: 450px;
}
.form-demo .card form {
	margin-top: 2rem;
}
.form-demo .card .p-field {
	margin-bottom: 1.5rem;
}
@media screen and (max-width: 960px) {
	.form-demo .card {
		width: 80%;
	}
}
</style>