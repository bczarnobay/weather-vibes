import Redis from 'ioredis'

class CacheService {
	public redis

	public initialize(){
		this.redis = new Redis({
			host: 'localhost',
			port: 6379,
			keyPrefix: 'cache:'
		})
	}

	public async get(key) {
		const value = await this.redis.get(key)

		return value ? JSON.parse(value) : null
	}

	public set(key, value, timeExp) {
		return this.redis.set(key, JSON.stringify(value), "EX", timeExp)
	}

	public delete(key) {
		return this.redis.del(key)
	}

	public async deletePrefix(prefix) {
		const keys = (await this.redis.keys(`cache:${prefix}:*`)).map(key => 
			key.replace('cache:', '')
		)

		return this.redis.del(keys)
	}
}

export default new CacheService()