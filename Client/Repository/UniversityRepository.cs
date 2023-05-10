using Client.Models;
using Client.Repository.Interface;

namespace Client.Repository
{
    public class UniversityRepository : GeneralRepository<University, int>, IUniversityRepository
    {
        public UniversityRepository(string request = "University/") : base(request)
        {

        }

    }
}
