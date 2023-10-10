<?php

namespace App\EventSubscriber;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\ContactForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class ContactFormSubscriber implements EventSubscriberInterface
{
    private MailerInterface $mailer;
    private EntityManagerInterface $entityManager;

    public function __construct(MailerInterface $mailer, EntityManagerInterface $entityManager)
    {
        $this->mailer = $mailer;
        $this->entityManager = $entityManager;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::VIEW => [
                'setCreateAt', EventPriorities::PRE_WRITE,
                'sendMail', EventPriorities::POST_WRITE],
        ];
    }

    public function sendMail(ViewEvent $event): void
    {
        $contactForm = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();
        if (!$contactForm instanceof ContactForm || Request::METHOD_POST !== $method) {
            return;
        }
        $message = (new Email())
            ->from('folken70@hotmail.com')
            ->to('folken70@hotmail.com')
            ->subject('A new book has been added')
            ->text(sprintf('The book #%d has been added.', $contactForm->getId()));
        try {
            $this->mailer->send($message);
            $contactForm->setSendAt(new \DateTime());
            $this->entityManager->persist($contactForm);
            $this->entityManager->flush();
        } catch (TransportExceptionInterface $e) {
        }
    }

    public function setCreateAt(ViewEvent $event): void
    {
        $contactForm = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();
        if (!$contactForm instanceof ContactForm || Request::METHOD_POST !== $method) {
            return;
        }
        $contactForm->setCreatedAt();
    }
}
