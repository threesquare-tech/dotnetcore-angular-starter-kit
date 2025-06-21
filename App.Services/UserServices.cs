using App.Core.Models;
using App.Models;
using App.Models.Repositories;
using App.Repositories;
using Microsoft.Extensions.Logging;

namespace App.Services
{
    public class UserServices : BaseServices
    {
        private readonly ILogger<UserServices> _logger;

        public UserServices(DatabaseContext context, ILogger<UserServices> logger) : base(context)
        {
            _logger = logger;
        }

        public User? Read(long id)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return factory.GetUserRepository().Read(id);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading user with ID {UserId}", id);
                return null;
            }
        }

        public async Task<User?> ReadAsync(long id, CancellationToken cancellationToken = default)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return await factory.GetUserRepository().ReadAsync(id, cancellationToken);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading user with ID {UserId}", id);
                return null;
            }
        }

        public User? ReadByEmail(string email)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return factory.GetUserRepository().Read(email);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading user with email {Email}", email);
                return null;
            }
        }

        public async Task<User?> ReadByEmailAsync(string email, CancellationToken cancellationToken = default)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return await factory.GetUserRepository().ReadAsync(email, cancellationToken);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading user with email {Email}", email);
                return null;
            }
        }

        public List<User> ReadMany()
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return factory.GetUserRepository().ReadMany();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading users");
                return new List<User>();
            }
        }

        public async Task<List<User>> ReadManyAsync(CancellationToken cancellationToken = default)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return await factory.GetUserRepository().ReadManyAsync(cancellationToken);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading users");
                return new List<User>();
            }
        }

        public PagedEntities<User> ReadMany(int pageNumber = 1, int pageSize = 10)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return factory.GetUserRepository().ReadMany(pageNumber, pageSize);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading users with pagination");
                return new PagedEntities<User>();
            }
        }

        public async Task<PagedEntities<User>> ReadManyAsync(int pageNumber = 1, int pageSize = 10, CancellationToken cancellationToken = default)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return await factory.GetUserRepository().ReadManyAsync(pageNumber, pageSize, cancellationToken);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error reading users with pagination");
                return new PagedEntities<User>();
            }
        }

        public void Create(User user)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    factory.GetUserRepository().Create(user);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating user");
                throw;
            }
        }

        public async Task CreateAsync(User user, CancellationToken cancellationToken = default)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    await factory.GetUserRepository().CreateAsync(user, cancellationToken);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating user");
                throw;
            }
        }

        public void Update(User user)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    factory.GetUserRepository().Update(user);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating user with ID {UserId}", user.Id);
                throw;
            }
        }

        public void Delete(long id)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    factory.GetUserRepository().Delete(id);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting user with ID {UserId}", id);
                throw;
            }
        }

        public async Task DeleteAsync(long id, CancellationToken cancellationToken = default)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    await factory.GetUserRepository().DeleteAsync(id, cancellationToken);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting user with ID {UserId}", id);
                throw;
            }
        }

        public bool Exists(string email)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return factory.GetUserRepository().Exists(email);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error checking if user exists with email {Email}", email);
                return false;
            }
        }

        public async Task<bool> ExistsAsync(string email, CancellationToken cancellationToken = default)
        {
            try
            {
                using (IRepositoryFactory factory = new RepositoryFactory(_Context))
                {
                    return await factory.GetUserRepository().ExistsAsync(email, cancellationToken);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error checking if user exists with email {Email}", email);
                return false;
            }
        }
    }
} 