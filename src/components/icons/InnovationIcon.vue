<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="icon"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon-path"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon-path"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon-path"
    />
  </svg>
</template>

<style scoped>
.icon {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.icon-path {
  transition: all 0.3s ease;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: drawPath 1s ease forwards;
}

.icon:hover {
  transform: scale(1.1) rotate(5deg);
}

.icon:hover .icon-path {
  stroke: var(--primary-color);
  filter: drop-shadow(0 0 5px var(--primary-alpha));
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}
</style> 