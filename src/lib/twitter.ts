import { TwitterApi } from 'twitter-api-v2';

const bearerToken = process.env.TWITTER_BEARER_TOKEN;

// Initialize a read-only client
const twitterClient = bearerToken ? new TwitterApi(bearerToken).readOnly : null;

export async function fetchUserMentions(username: string) {
    if (!twitterClient) {
        throw new Error("Twitter API client not configured. Missing TWITTER_BEARER_TOKEN.");
    }

    // 1. Resolve the user's Twitter ID from their handle
    const user = await twitterClient.v2.userByUsername(username);
    if (!user.data) {
        throw new Error(`User ${username} not found on Twitter.`);
    }

    // 2. Fetch mentions timeline for that user ID
    const mentions = await twitterClient.v2.userMentionTimeline(user.data.id, {
        expansions: ['author_id'],
        'user.fields': ['name', 'username', 'profile_image_url'],
        'tweet.fields': ['created_at'],
        max_results: 100
    });

    const includes = mentions.includes;

    // 3. Map the response to our standardized format
    if (!mentions.data.data) {
        return [];
    }

    const formattedMentions = mentions.data.data.map(tweet => {
        // Look up the author of this tweet in the expansions payload
        const author = includes?.users?.find(u => u.id === tweet.author_id);
        return {
            id: tweet.id,
            text: tweet.text,
            author_name: author?.name || 'Unknown',
            author_username: author?.username || 'unknown',
            created_at: tweet.created_at || new Date().toISOString()
        };
    });

    return formattedMentions;
}
