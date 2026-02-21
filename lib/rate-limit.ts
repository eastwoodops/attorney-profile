import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function checkRateLimit(ip: string): Promise<{ success: boolean }> {
  if (!process.env.UPSTASH_REDIS_REST_URL) {
    console.warn("Redis not configured, skipping rate limit.");
    return { success: true };
  }

  const key = `contact_limit:${ip}`;
  const limit = 5;
  const duration = 60 * 10; // 10 minutes

  try {
    const current = await redis.incr(key);
    if (current === 1) {
      await redis.expire(key, duration);
    }

    return { success: current <= limit };
  } catch (error) {
    console.error("Rate limit error:", error);
    // Fail open if Redis is down to avoid blocking legitimate users
    return { success: true };
  }
}
