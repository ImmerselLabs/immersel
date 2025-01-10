<script setup lang="ts">
import { ref, type Ref, onMounted } from "vue"
import { useRouter } from "vue-router"

enum AuthSteps
{
	EMAIL,
	CODE
}

const router = useRouter()

const currentStep: Ref<AuthSteps> = ref(AuthSteps.EMAIL)
const userEmail: Ref<string> = ref("")
const userCode: Ref<string> = ref("")
const errorMessage: Ref<string> = ref("")

onMounted(() =>
{
	document.addEventListener("keypress", (event: any) =>
	{
		if (event.key.toLowerCase() == 'enter' || event.keyCode == 13)
		{
			if (currentStep.value == AuthSteps.EMAIL) submitEmail()
			if (currentStep.value == AuthSteps.CODE) submitEmailCode()
		}
	})
})

function submitEmail ()
{
	if (currentStep.value == AuthSteps.EMAIL && userEmail.value == "dev.ishpreetaaa999@gmail.com")
	{
		currentStep.value = AuthSteps.CODE
	}
	else
	{
		displayError()
	}

}

function submitEmailCode ()
{
	if (userCode.value == "AAA999")
	{
		router.push({
			name: "home"
		})
	}
}

function displayError ()
{
	errorMessage.value = "You are not authorized to view this workspace"
	setTimeout(() =>
	{
		document.getElementById("banner")?.classList.remove("animate-shake-x")
		errorMessage.value = ""
	}, 2500)
}
</script>



<template>
	<div class="w-full container-height">
		<div
			class="absolute -top-10 -left-10 -z-1 bg-gradient-to-br from-emerald-600 via-cyan-600 to-accent rounded-full w-[30rem] h-auto aspect-square blur-[4rem] opacity-60 transition-all duration-[3s] ease delay-300 scale-[2]">
		</div>
		<!-- <div class="absolute-center -z-1 circle-gradient ronded-full w-[35rem] h-auto aspect-square blur-[4rem] opacity-20"></div> -->
		<div class="absolute top-44 left-1/2 -translate-x-1/2 w-full lg:w-3/4 xl:w-fit">
			<div id="banner"
				class="py-4 px-7 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent font-sans tracking-wider text-[1.1rem]"
				:class="{ '!border-red-500 !bg-red-400/10 animate-shake-x': errorMessage }">
				<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"
					class="icon icon-tabler icons-tabler-filled icon-tabler-shield-lock inline-block text-accent"
					:class="{ '!text-red-400': errorMessage }">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path
						d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm.002 7a2 2 0 0 0 -1.995 1.85l-.005 .15l.005 .15a2 2 0 0 0 .995 1.581v1.769l.007 .117a1 1 0 0 0 1.993 -.117l.001 -1.768a2 2 0 0 0 -1.001 -3.732z" />
				</svg>
				&nbsp;
				{{ errorMessage || "This workspace is personal and only allowed to authorized people." }}
			</div>
		</div>
		<div class="absolute-center w-full h-fit">
			<div
				class="relative w-[clamp(400px,50%,600px)] h-fit mx-auto p-10 pb-14 rounded-xl border-2 border-accent bg-accent/25 overflow-hidden backdrop-blur-lg">
				<div class="w-full h-fit">
					<div class="w-full h-fit">
						<h3 class="text-left text-xl text-white/80">
							Hey, there!
						</h3>
					</div>
					<div class="w-full h-fit py-4 pb-5">
						<p class="text-center text-white text-xl">
							Enter your authentication details
						</p>
					</div>
				</div>


				<!-- email address -->
				<div class="w-full h-fit">
					<div class="w-full h-fit">
						<input type="text" id="user-input-email" class="cstm-input text-white" autocomplete="off" :autofocus="currentStep == AuthSteps.CODE"
							:disabled="currentStep == AuthSteps.CODE" placeholder="Email Address" name="email" tabindex="-1"
							v-model="userEmail"
							:class="currentStep == AuthSteps.CODE ? '!bg-transparent !text-zinc-500 opacity-80 cursor-not-allowed' : ''" />
					</div>
				</div>
				<!-- email address -->

				<!-- email - code -->
				<div class="w-full h-fit pt-6 transitions-all ease-in-out"
					:class="currentStep == AuthSteps.CODE ? 'opacity-1  top-0' : 'absolute top-full opacity-0'">
					<p class="text-left pb-2">
						Enter the code sent to the above email address
					</p>
					<div class="w-full h-fit">
						<input type="text" id="user-input-code" autocomplete="off" autocapitalize="true" tabindex="-1"
							:autofocus="currentStep == AuthSteps.CODE"
							class="cstm-input bg-accent/5 text-center !text-xl uppercase text-white" placeholder="Enter code here"
							name="email" v-model="userCode" />
					</div>
				</div>
				<!-- email - code -->

				<br />

				<!-- button -->
				<div class="w-fit h-fit ml-auto pt-4">
					<button class="btn bg-accent text-white"
						@click="currentStep == AuthSteps.EMAIL ? submitEmail() : currentStep == AuthSteps.CODE ? submitEmailCode() : ''">
						{{ currentStep == AuthSteps.CODE ? 'Login' : 'Get Code' }}
					</button>
				</div>
				<!-- button -->


				<!-- Press enter -->
				<div class="absolute bottom-2 left-4">
					<div class="w-fit h-fit">
						<p class="text-sm text-white/80 font-light">
							press
							<span class="font-bold text-white/80">
								Enter
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
									class="icon icon-tabler icons-tabler-outline inline-block -translate-y-1 icon-tabler-corner-down-left">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M18 6v6a3 3 0 0 1 -3 3h-10l4 -4m0 8l-4 -4" />
								</svg>
							</span>
							to continue
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style lang="sass">
.auth-card
	box-shadow: 0 0 200px 20px var(--tw-shadow-color)
</style>
