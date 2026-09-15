<script setup lang="ts">
import { computed } from 'vue';
import type { DisplayProgressStage } from '../api/client';

interface Props {
  stage?: DisplayProgressStage | null;
  message?: string | null;
}

const props = defineProps<Props>();

const stageMessages: Record<DisplayProgressStage, string> = {
  verifying: 'Verifying request...',
  'cache-check': 'Checking cache...',
  cloning: 'Cloning repository...',
  'repository-fetch': 'Fetching repository...',
  extracting: 'Extracting files...',
  processing: 'Processing files...',
};

const MAX_DETAIL_LENGTH = 60;

const detailMessage = computed(() => {
  const text = props.message || (props.stage && stageMessages[props.stage]) || '...';
  if (text.length <= MAX_DETAIL_LENGTH) return text;
  return `${text.slice(0, MAX_DETAIL_LENGTH)}...`;
});
</script>

<template>
  <div class="loading">
    <div class="loading-header">
      <div class="spinner"></div>
      <p>Processing repository...</p>
    </div>
    <p class="loading-detail">{{ detailMessage }}</p>
  </div>
</template>

<style scoped>
.loading {
  padding: 24px;
  text-align: center;
}

.loading-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.loading-header p {
  margin: 0;
}

.loading-detail {
  margin: 4px 0 0;
  font-size: 0.8em;
  color: var(--vp-c-text-3);
}

.spinner {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
