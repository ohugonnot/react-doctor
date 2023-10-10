<?php

namespace App\Repository;

use App\Entity\ContactCard;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ContactCard>
 *
 * @method ContactCard|null find($id, $lockMode = null, $lockVersion = null)
 * @method ContactCard|null findOneBy(array $criteria, array $orderBy = null)
 * @method ContactCard[]    findAll()
 * @method ContactCard[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContactCardRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ContactCard::class);
    }

//    /**
//     * @return ContactCard[] Returns an array of ContactCard objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ContactCard
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
