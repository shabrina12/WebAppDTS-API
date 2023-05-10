using Client.Models;
using Client.ViewModels;

namespace Client.Repository.Interface
{
    public interface IAccountRepository : IGeneralRepository<Account, string>
    {
        public Task<ResponseViewModel<string>> Login(LoginVM entity);
        public Task<ResponseMessageVM> Register(RegisterVM entity);
    }
}
